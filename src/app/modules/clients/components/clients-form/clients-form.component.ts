import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../../models/client.model';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'vcs-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.scss'],
})
export class ClientsFormComponent implements OnInit {
  clientForm!: FormGroup;
  client: Client = <Client>{};
  clientId: string | null = null;
  isEdit = false;
  hasBeenEdited = false;
  constructor(
    private formBuilder: FormBuilder,
    private clientsService: ClientsService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.clientId = this._route.snapshot.paramMap.get('id');

    this.createForm(this.client);
    if (this.clientId) {
      this.isEdit = true;
      this.clientsService.get(this.clientId).subscribe((client) => {
        this.client = client;
        this.createForm(this.client);
      });
    }
  }

  createForm(client: Client) {
    this.clientForm = this.formBuilder.group({
      clientCode: [client.clientCode, Validators.required],
      name: [client.name, Validators.required],
      cpf: [client.cpf, Validators.required],
      sex: [client.sex, Validators.required],
      email: [client.email, Validators.required],
    });
  }

  onSubmit() {
    if (this.isEdit) {
      this.editClient();
    } else {
      this.createClient();
    }
  }

  cancel() {
    this._router.navigate(['/clients']);
  }

  createClient() {
    this.clientsService.create(this.clientForm.value).subscribe(
      (res) => {
        this._snackBar.open('Produto cadastrado com sucesso', 'Fechar');
        this._router.navigate(['/clients']);
      },
      (error) => {
        console.log(error.message);
      }
    );
  }

  editClient() {
    this.clientsService.update(this.clientId!, this.clientForm.value).subscribe(
      (res) => {
        this._snackBar.open('Produto editado com sucesso', 'Fechar');
        this._router.navigate(['/clients']);
      },
      (error) => {
        console.log(error.message);
      }
    );
  }
}
