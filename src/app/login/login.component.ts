import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginFormHTMLElement', {read : ElementRef, static : true}) loginFormHTMLElement!: ElementRef;

  loginValid = true;
  loginForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const htmlFormElement = this.loginFormHTMLElement.nativeElement;
    let actionUrl = (window as { [key: string]: any })["g_urlLoginAction"] as string;
    actionUrl = actionUrl.replace( /&amp;/g, '&');
    htmlFormElement.action = actionUrl;
    htmlFormElement.submit();
  }

}
