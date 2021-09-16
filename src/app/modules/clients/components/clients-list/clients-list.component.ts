import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDeleteDialogComponent } from 'src/app/shared/confirm-delete-dialog/confirm-delete-dialog.component';
import { Client } from '../../models/client.model';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'vcs-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
})
export class ClientsListComponent implements OnInit {
  clients?: Client[];

  constructor(
    private clientsService: ClientsService,
    public dialog: MatDialog,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getClients();
  }

  getClients() {
    this.clientsService.getAll().subscribe(
      (clients) => {
        this.clients = clients;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteClient(id: string) {
    this.clientsService.delete(id).subscribe(
      (res) => {
        this.clients = this.clients?.filter((client) => client.id !== id);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  editClient(id: string) {
    this._router.navigate(['/clients', id]);
  }

  confirmDialog(id: string): void {
    if (this.dialog.openDialogs.length == 0) {
      const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
        width: '350px',
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result) this.deleteClient(id);
      });
    }
  }
}
