export interface JwtPayload {
   id: number;
   admin: 0 | 1;
   username: string;
   role: string;
}