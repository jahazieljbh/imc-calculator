export class StorageService {
    private roles: Array<string> = [];

    constructor() { }

    setSession(key: string, token: string) {
        window.sessionStorage.removeItem(key);
        window.sessionStorage.setItem(key, token);
    }

    getSession(key: string) {
        return sessionStorage.getItem(key);
    }

    signOut() {
        window.sessionStorage.clear();
    }

    saveUsername(key: string, username: string) {
        window.sessionStorage.removeItem(key);
        window.sessionStorage.setItem(key, username);
    }

    getUsername(key: string): string {
        return sessionStorage.getItem(key);
    }

    saveAuthorities(key: string, authorities: string[]) {
        window.sessionStorage.removeItem(key);
        window.sessionStorage.setItem(key, JSON.stringify(authorities));
    }

    getAuthorities(key1: string, key2: string): string[] {
        this.roles = [];

        if (sessionStorage.getItem(key1)) {
            JSON.parse(sessionStorage.getItem(key2)).forEach(authority => {
                this.roles.push(authority.authority);
            });
        }

        return this.roles;
    }

    saveId(key: string, id: string) {
        window.sessionStorage.removeItem(key);
        window.sessionStorage.setItem(key, id);
    }

    getId(key: string): string {
        return sessionStorage.getItem(key);
    }

    saveEmail(key: string, email: string) {
        window.sessionStorage.removeItem(key);
        window.sessionStorage.setItem(key, email);
    }

    getEmail(key: string): string {
        return sessionStorage.getItem(key);
    }

}