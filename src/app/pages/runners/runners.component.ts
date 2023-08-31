import {
  // AfterViewInit,
  Component,
  HostListener,
  OnInit,
  // ViewChild,
} from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-runners',
  templateUrl: './runners.component.html',
  styleUrls: ['./runners.component.scss'],
})
export class RunnersComponent implements OnInit {

  isLoading = false
  searchText = '';
  filteredUsers: User[] = [];
  searchTimeout: any;
  users: User[] = [];
  allUsers: User[] = [];

  currentPage = 1;
  itemsPerPage = 15;
  totalItems = 0;

  get usersToShow() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredUsers.slice(startIndex, endIndex);
  }

  isComputerScreen = true;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }
  constructor(private userService: UserService) {}

  filterUsers() {
    const searchTextLowerCase = this.searchText.toLowerCase();
    this.filteredUsers = this.allUsers.filter(
      (user) =>
        user.firstName.toLowerCase().includes(searchTextLowerCase) ||
        user.surname.toLowerCase().includes(searchTextLowerCase)
    );
    this.updatePagination();
  }

  onSearchInput() {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      this.filterUsers();
    }, 300); // Adjust debounce time as needed
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  displayedColumns: string[] = [
    'firstName',
    'surname',
    'email',
    'gender',
    'section',
  ];
  dataSource = this.users;

  ngOnInit(): void {
    this.isLoading = true;
    this.userService.getUsers()
      .subscribe(users => {
        this.users = users;
        this.allUsers = users; // Store all users
        this.totalItems = this.allUsers.length; // Set totalItems based on allUsers
        this.filteredUsers = this.allUsers; // Initially show all users
        this.isLoading = false;
      });
    this.checkScreenSize();
    
    if (!this.isComputerScreen) {
      this.displayedColumns = ['firstName', 'surname', 'gender','section'];
    }
  }
  
  checkScreenSize() {
    this.isComputerScreen = window.innerWidth > 620; // Adjust the breakpoint as needed
  }

  updatePagination() {
    this.totalItems = this.filteredUsers.length;
    this.currentPage = 1; // Reset to the first page
  }
}
