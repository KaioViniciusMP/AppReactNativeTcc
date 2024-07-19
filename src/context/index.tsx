import { createContext, ReactNode, useState } from "react";
import api from "../services/api";
import { Alert } from "react-native";
import { AxiosError } from "axios";

type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
}

type UserProps = {
    usuarioCodigo: number;
    usuario: string;
    nome: string;
    token: string;
}

type AuthProviderProps = {
    children: ReactNode;
}

type SignInProps = {
    txtUsuario: string;
    txtSenha: string;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserProps>({
        usuarioCodigo: 0,
        usuario: '',
        nome: '',
        token: '',
    })

    const [loadingAuth, setLoadingAuth] = useState(false);
    const isAuthenticated = !!user.usuario;

    async function signIn({ txtUsuario, txtSenha }: SignInProps) {
        const AlertErrorConnectionService = () =>
            Alert.alert('Error', `Ocorreu algum erro ao tentar se conectar com o servidor!`, [
                { text: 'Fechar' },
            ]);

        const AlertUnauthorized = () =>
            Alert.alert('Error', `Usuario ou senha inválidos!`, [
                { text: 'Fechar' },
            ]);


        setLoadingAuth(true);

        try {
            //fazer requisição com axios aqui
            const response = await api.post('/Autenticacoes', {
                Usuario: txtUsuario,
                Senha: txtSenha
            })

            console.log(response.data)

            const { usuarioCodigo, usuario, nome, token } = response.data

            setUser({
                usuarioCodigo,
                usuario,
                nome,
                token
            })

            setLoadingAuth(false);

        } catch (err) {
            const error = err as AxiosError;

            if (error.response) {
                if (error.response.status === 404) {
                    AlertErrorConnectionService()
                }
                else if (error.response.status === 401) {
                    AlertUnauthorized()
                }
                else {
                    AlertErrorConnectionService()
                }
            }
            else {
                console.log('Erro ao acessar', error);
            }

            setLoadingAuth(false);
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}