import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  @Input() allNotes:any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAllNotesFromService()
  }

  getAllNotesFromService(){
    this._httpService.getNotes().subscribe(notes => {
      console.log("got all the notes honey!", notes)
      this.allNotes = notes;
      //@ts-ignore
      for(let note of notes){
        let d = new Date(note.createdAt)
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        let date = ""
        date += months[d.getMonth()] +" "+ d.getDate() +", "+d.getFullYear()+", "+ d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()
        note.fdate = date;
      }
    })
  }

}
