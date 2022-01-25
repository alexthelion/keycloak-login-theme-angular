import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginFormHTMLElement', {read : ElementRef, static : true}) loginFormHTMLElement!: ElementRef;
  loginForm: FormGroup;
  loginTitle: string = 'Sign in to your account';
  errorMessage: string = '';

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.errorMessage = (window as { [key: string]: any })["usernameOrPasswordError"] as string;
  }

  get username(): FormControl {
    return <FormControl> this.loginForm.get('username');
  }

  get password(): FormControl {
    return <FormControl> this.loginForm.get('password');
  }

  onSubmit(): void {
    const htmlFormElement = this.loginFormHTMLElement.nativeElement;
    let actionUrl = (window as { [key: string]: any })["loginAction"] as string;
    actionUrl = actionUrl.replace( /&amp;/g, '&');
    htmlFormElement.action = actionUrl;
    htmlFormElement.submit();
  }

}
