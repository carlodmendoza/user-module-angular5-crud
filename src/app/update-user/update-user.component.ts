import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UpdateUserComponent implements OnInit {

  user: any = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.getUser(this.route.snapshot.params['id']);
  }

  getUser(id) {
    this.http.get('/user/'+id).subscribe(data => {
      this.user = data;
    });
  }

  updateUser(id) {
    this.http.put('/user/'+id, this.user)
      .subscribe(res => {
          this.router.navigate(['/users']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
