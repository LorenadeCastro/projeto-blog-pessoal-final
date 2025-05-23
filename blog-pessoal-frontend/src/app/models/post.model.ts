import { UserModel } from './user.model';

export interface PostModel {
  id?: number;
  titulo: string;
  conteudo: string;
  data: string;
  usuario: UserModel;
}
