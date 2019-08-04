import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CommfunService } from 'src/app/services/commfun.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stud-reg',
  templateUrl: './stud-reg.page.html',
  styleUrls: ['./stud-reg.page.scss'],
})
export class StudRegPage implements OnInit {

  validations_form: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private myFunc: CommfunService,
    public http: HttpClient,
    public loadingCtrl: LoadingController,
    public toastController: ToastController,) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      regNum: new FormControl('', Validators.compose([
        Validators.maxLength(6),
        Validators.minLength(1),
        // Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.required
      ])),
      studName: new FormControl('', Validators.compose([
        Validators.required
      ])),
      dob: new FormControl('', Validators.compose([
        Validators.required
      ])),
      gender: new FormControl('', Validators.compose([
        Validators.required
      ])),
      child: new FormControl('', Validators.compose([
        Validators.required
      ])),
      fatherName: new FormControl('', Validators.compose([
        Validators.required
      ])),
      motherName: new FormControl('', Validators.compose([
        Validators.required
      ])),
      mathsMarks: new FormControl('', Validators.compose([
        Validators.maxLength(100),
        Validators.minLength(35),
        Validators.required
      ])),
      physicsMarks: new FormControl('', Validators.compose([
        Validators.maxLength(100),
        Validators.minLength(35),
        Validators.required
      ])),
      chemistryMarks: new FormControl('', Validators.compose([
        Validators.maxLength(100),
        Validators.minLength(35),
        Validators.required
      ])),
    });
  }

  validation_messages = {
    regNum: [
      { type: 'required', message: 'Registed number is required.' },
      { type: 'minlength', message: 'Enter the correct register number.' },
      { type: 'maxlength', message: 'Enter the correct register number' },
    ],
    studName: [
      { type: 'required', message: 'Student Name is required.' },
    ],
    dob: [
      { type: 'required', message: 'Date of birth is required.' },
    ],
    gender: [
      { type: 'required', message: 'Please select the Gender' },
    ],
    child: [
      { type: 'required', message: 'Please select the childern' },
    ],
    fatherName: [
      { type: 'required', message: 'Please Enter the Father Name' },
    ],
    motherName: [
      { type: 'required', message: 'Please Enter the Mother Name' },
    ],
    mathsMarks: [
      { type: 'required', message: 'please Enter the marks.' },
      { type: 'minlength', message: 'You are not Eligible to Apply.' },
      { type: 'maxlength', message: 'Enter the correct marks' },
    ],
    physicsMarks: [
      { type: 'required', message: 'please Enter the marks.' },
      { type: 'minlength', message: 'You are not Eligible to Apply.' },
      { type: 'maxlength', message: 'Enter the correct marks' },
    ],
    chemistryMarks: [
      { type: 'required', message: 'please Enter the marks.' },
      { type: 'minlength', message: 'You are not Eligible to Apply.' },
      { type: 'maxlength', message: 'Enter the correct marks' },
    ],
  };

  async onSubmit(values) {
    console.log(values);
    console.log(values.email);
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
