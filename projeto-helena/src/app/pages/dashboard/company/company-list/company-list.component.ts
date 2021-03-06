import {Component, OnInit, ViewChild} from '@angular/core';
import {CompanyService} from "../../../../services/company.service";
import {Router} from "@angular/router";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  table = tableCompany
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  constructor(
    public companyService: CompanyService,
    public router: Router,
    private snackBar: MatSnackBar
  ) {
   this.loadList();
  }

  ngOnInit(): void { }

  loadList() {
    this.companyService.get().subscribe( result => {
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.paginator = this.paginator;
    }, error => console.log(error))
  }

  edit(idCompany: number): void {
    this.router.navigate([`dashboard/company/edit/${idCompany}`]);
  }

  delete(idCompany: number): void {
    this.companyService.delete(idCompany).subscribe( result => {
      this.snackBar.open('Empresa desativada com sucesso!!', 'Fechar', {
        panelClass: ['green'],
        duration: 4000
      });
      this.loadList();
    }, error => this.snackBar.open('Empresa desativada!', 'Fechar', {
      panelClass: ['red'],
      duration: 4000
    }));
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
