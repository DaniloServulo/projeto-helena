export class Company {
  id: number | undefined;
  avatarUrl: string | undefined;
  razaoSocial: string | undefined;
  qtdeFuncionarios: number | undefined;
  active: boolean | undefined;
  constructor(other?: Company) {
    if(other) {
      this.id = other.id;
      this.avatarUrl = other.avatarUrl;
      this.razaoSocial = other.razaoSocial;
      this.qtdeFuncionarios = other.qtdeFuncionarios;
      this.active = other.active;
    }
  }

}
