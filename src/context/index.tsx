import { createContext, ReactNode, useState } from "react";

type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
}

type UserProps = {
    txtUsuario: string;
    txtSenha: string;
}

type AuthProviderProps = {
    children: ReactNode;
}

type SignInProps = {
    txtUsuario: string;
    txtSenha: string;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children } : AuthProviderProps) {
    const [user, setUser] = useState<UserProps>({
        txtUsuario: '',
        txtSenha: '',
    })

    const [loadingAuth, setLoadingAuth] = useState(false);
    const isAuthenticated = !!user.txtUsuario;

    async function signIn({ txtUsuario, txtSenha}: SignInProps){
        setLoadingAuth(true);

        try {
            //fazer requisição com axios aqui
            // const response = await api.post('/rotaApi',{
            //     txtUsuario,
            //     txtSenha
            // })

            if(txtUsuario != '' && txtSenha != ''){
                console.log('usuario logado: ' + txtUsuario + ' senha: ' + txtSenha)
                setUser({txtUsuario, txtSenha})
            }

        } catch (error) {
            console.log('erro ao acessar', error)
            setLoadingAuth(false);
        }
    }

    return(
        <AuthContext.Provider value={{user, isAuthenticated, signIn}}>
            {children}
        </AuthContext.Provider>
    )
}