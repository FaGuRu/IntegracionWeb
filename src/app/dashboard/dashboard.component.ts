import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../service/auth/auth-service.service'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['id', 'fullname', 'address', 'age'];
  usuarios = [];
  addFormGroup: FormGroup;
  editFormGroup: FormGroup;
  deleteFormGroup: FormGroup;

  constructor(private _authService: AuthServiceService, private router: Router, private _formBuilder: FormBuilder) {
    if (_authService.isAuthenticated()) {
      router.navigate(['dashboard'])
    } else {
      router.navigate(['login'])
    }
  }

  ngOnInit(): void {
    this.genTable();
    this.addFormGroup = this._formBuilder.group({
      fullname: ['', Validators.required],
      address: ['', Validators.required],
      age: ['', Validators.required]
    })
    this.editFormGroup = this._formBuilder.group({
      id: ['', Validators.required],
      fullname: ['', Validators.required],
      address: ['', Validators.required],
      age: ['', Validators.required]
    })
    this.deleteFormGroup = this._formBuilder.group({
      id: ['', Validators.required],
    })
    

  }

  post(): void {
    const data = this.addFormGroup.value;
    this._authService.savePost(data.fullname,data.address,data.age).subscribe((response:[])=>{
      if(response !=null){
        this.genTable();
      }
    })
    
  }

  put():void{
    const data = this.editFormGroup.value;
    this._authService.editPut(data.id,data.fullname,data.address,data.age).subscribe((response:[])=>{
      if(response !=null){
        this.genTable();
      }
    })
    
  }

  delete(): void{
    const data = this.deleteFormGroup.value;
    this._authService.deleteU(data.id).subscribe((response:[])=>{
      if(response !=null){
        this.genTable();
      }
    })
    
  }

  genTable():void{
    this._authService.getUsers().subscribe((data: any[]) => {
      console.log(data);
      this.usuarios = data;
    });
  }

}
