export class Company {
  id: number | undefined;
  avatarUrl: string | undefined;
  nomeFantasia: string | undefined;
  razaoSocial: string | undefined;
  qtdeFuncionarios: number | undefined;
  active: boolean | undefined;
  constructor(other?: Company) {
    if(other) {
      this.id = other.id;
      this.avatarUrl = other.avatarUrl;
      this.nomeFantasia = other.nomeFantasia;
      this.razaoSocial = other.razaoSocial;
      this.qtdeFuncionarios = other.qtdeFuncionarios;
      this.active = other.active;
    }
  }

}
