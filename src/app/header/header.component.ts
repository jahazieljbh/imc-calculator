import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private storageService: StorageService,
            public usersService: UsersService, private router: Router) { }

  result = '';

  ngOnInit(): void {
  }

  logout() {
    this.storageService.signOut();
    this.result = 'logout';
  }
}
