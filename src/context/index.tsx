import { createContext, ReactNode, useState } from "react";
import api from "../services/api";

type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
}

type UserProps = {
    usuarioCodigo: string;
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
        usuarioCodigo: '',
        usuario: '',
        nome: '',
        token: '',
    })

    const [loadingAuth, setLoadingAuth] = useState(false);
    const isAuthenticated = !!user.usuario;

    async function signIn({ txtUsuario, txtSenha }: SignInProps) {
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

        } catch (error) {
            console.log('erro ao acessar', error)
            setLoadingAuth(false);
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}