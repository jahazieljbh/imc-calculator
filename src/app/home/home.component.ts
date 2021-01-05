import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  info: any;
  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.info = {
      token: this.storageService.getSession("token"),
      id: this.storageService.getId("id"),
      email: this.storageService.getEmail("email"),
      username: this.storageService.getUsername("username"),
      authorities: this.storageService.getAuthorities("token","roles")
    };
  }
}
