import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'public';
  allNotes: any;
  newNote: any;
  time: String

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.newNote={note: ""}

  }

  addNote(){
    this._httpService.addNote(this.newNote).subscribe(note =>{
      console.log("The note has been added!", note)
      this.newNote = {note: ""}
    })
  }

  getAllNotesFromService(){
    this._httpService.getNotes().subscribe(notes => {
      console.log("got all the notes honey!", notes)
      this.allNotes = notes;
    })
  }
}
