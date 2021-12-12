import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CompanyService} from "../../../../services/company.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Company} from "../../../../models/company.model";

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {
  form: FormGroup;
  constructor(
    private route: ActivatedRoute,
    public companyService: CompanyService,
    private router: Router,
  ) {
    this.form = new FormGroup({
      id: new FormControl(null),
      nomeFantasia: new FormControl('', [Validators.required]),
      razaoSocial: new FormControl('', [Validators.required]),
      qtdeFuncionarios: new FormControl('', [Validators.required]),
      active: new FormControl(true, [Validators.required]),
    });
  }

  ngOnInit(): void {
    if(this.route.snapshot.params['id'] !== undefined) {
      let id = this.route.snapshot.params['id'];
      this.companyService.getById(id).subscribe( result => {
        const data = result as Company;
        this.form.controls['id'].setValue(id);
        this.form.controls['nomeFantasia'].setValue(data.nomeFantasia);
        this.form.controls['razaoSocial'].setValue(data.razaoSocial);
        this.form.controls['qtdeFuncionarios'].setValue(data.qtdeFuncionarios);
        this.form.controls['active'].setValue(data.active);
      });
    }
  }

  onSubmit(): void {
    if(this.form.valid){
      if(this.form.value.id !== null){
        this.companyService.update(this.form.value);
        this.router.navigate(['/dashboard/company'])
      } else {
        this.companyService.create(this.form.value).subscribe( result => {
          this.router.navigate(['/dashboard/company'])
        }, error => {
          console.log(error);
        })
      }
    }
  }
}
