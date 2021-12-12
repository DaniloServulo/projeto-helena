import { Component, OnInit } from '@angular/core';
import {CompanyService} from "../../../../services/company.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  table = tableCompany
  dataSource: any;
  constructor(
    public companyService: CompanyService,
    public router: Router
  ) {
    this.companyService.get().subscribe( result => {
      this.dataSource = result;
      console.log(result);
    }, error => console.log(error))
  }

  ngOnInit(): void {
  }

  edit(idCompany: number): void {
    this.router.navigate([`dashboard/company/edit/${idCompany}`]);
  }

  delete(idCompany: number): void {
    this.companyService.delete(idCompany).subscribe( result => console.log(result), error => console.log(error));
  }

}
const tableCompany = {
  tableColumnsGenerate: ['avatarUrl', 'razaoSocial', 'nomeFantasia', 'qtdeFuncionarios', 'active', 'action'],
  tableColumns: [
    { name: 'Logo', value: 'avatarUrl'},
    { name: 'Razão Social', value: 'razaoSocial'},
    { name: 'Nome Fantasia', value: 'nomeFantasia'},
    { name: 'Qtd. de funcionários', value: 'qtdeFuncionarios'},
    { name: 'Ativo', value: 'active'},
    { name: 'Ações', value: 'action'},
  ]
};
