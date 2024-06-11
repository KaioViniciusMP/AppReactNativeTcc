import { ActivityIndicator, View } from "react-native";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

function Routes() {
    const isAutenticated = false;
    const loading = true;

    if (!loading) {
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#5D5C96',
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                <ActivityIndicator size={60} color="#fff" />
            </View>
        )
    }

    return (
        isAutenticated ? <AuthRoutes /> : <AppRoutes />
    )
}

export default Routes;