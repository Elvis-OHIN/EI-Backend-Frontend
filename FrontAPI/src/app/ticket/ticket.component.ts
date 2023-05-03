import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TicketService } from '../service/ticket/ticket.service';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  items: any;
  data: any;
  closeResult = '';

  valeurSelectionnee: any;
  nom: string = '';
  prenom: string = '';
  id: number = 0;
  title : string = '';
  description : string = '';
  statut :  string = 'à faire';
  donnees : any;
  tickets : any;
  ticket : any;

  constructor(
    private ticketService: TicketService,
    private modalService: NgbModal
    ) {
  }

  ngOnInit(): void {
    this.getTickets()
  }

  getTickets(): void {
    this.ticketService.getTickets()
      .subscribe((response) => {
        this.tickets = response;
      })
  }

  envoyerDonnees() {
    this.donnees = {title : this.title , description: this.description, statut : this.statut };
    this.ticketService.addTicket(this.donnees).subscribe(resultat => {
      this.getTickets();
    });
  }
  deleteTicket(id: number) {
    this.ticketService.getTicket(id)
      .subscribe((response) => {
        this.ticket = response;
    })
    if(this.ticket.statut !=  "terminé"){
      this.ticketService.deleteTicket(id).subscribe(response => {
        this.getTickets();
      });
    }
  }
  updateTicket(id: number,title: string, description: string,statut: string) {
    const body = {title : title , description: description, statut : statut };
    this.ticketService.updateTicket(id,body).subscribe(response => {
      this.getTickets();
    });

  }
  open(content: any) {

		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
		);
	}
  ticket_create(){
    this.id = 0;
    this.title = "";
    this.description = "";
    this.statut = 'à faire';
  }

  ticket_value(id: number,title: string, description: string,statut: string){
    this.id = id;
    this.title = title;
    this.description = description;
    this.statut = statut;
  }
}
