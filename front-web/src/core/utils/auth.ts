export const CLIENT_ID = 'dsmovieflix';
export const CLIENT_SECRET = 'dsmovieflix123';

type LoginResponse = {
    access_toke: string;
    token_type: string;
    expires_in: number;
    scope: string;
    userFirstName: string;
    userId: number;
}

export const saveSessionData = (loginResponse: LoginResponse) => {
    localStorage.setItem('authData', JSON.stringify(loginResponse));
}; 