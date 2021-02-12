export default {
    getSession,
    write,
    destroy
}

function getSession(){
    const session = sessionStorage.getItem('user');
    return session ? JSON.parse(session) : {};
}

function write(data){
    sessionStorage.setItem('user', JSON.stringify(data))
}

function destroy() {
    sessionStorage.removeItem('user');
}