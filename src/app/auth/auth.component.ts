import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { StoriesService } from '../shared/service/stories.service';
import { Router } from '@angular/router';
import { AuthService } from '../shared/service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  // name = new FormControl('', Validators.required);
  authForm: FormGroup;
  loading: boolean;

  get controls() {
    return this.authForm.controls;
  }

  constructor(
    public ss: StoriesService,
    public as: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.authForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      isAdmin: [false, Validators.required],
    });
  }

  submit() {
    this.loading = true;
    this.as.login(this.authForm.value).subscribe((user) => {
      console.log(user, 'user');
      localStorage.setItem('auth_token', user.token);
      localStorage.setItem('user', JSON.stringify(user));
      if (user.role !== 'Admin') {
        this.router.navigate(['main', 'create-story']);
      } else {
        this.router.navigate(['main', 'stories-list']);
      }
    });
  }
}
