import router from "../router";

const session = {
    user: null as any,
}

export async function Login(username: string, password: string) {
    session.user = { username, password };
    router.push('/Messagess');
}
    
export default session;