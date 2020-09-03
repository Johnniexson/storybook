import { Component, OnInit, Inject } from '@angular/core';
import * as BalloonEditor from '@ckeditor/ckeditor5-build-balloon';
// import * as InlineEditor from "@ckeditor/ckeditor5-build-inline";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { StoriesService } from 'src/app/shared/service/stories.service';
// import * as moment from "moment";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  public Editor = BalloonEditor;
  form: FormGroup;
  types = ['enhancement', 'bugfix', 'development', 'QA'];
  complexities = ['Low', 'Mid', 'High'];

  config = {
    toolbar: [
      'heading',
      '|',
      'bold',
      'italic',
      '|',
      'bulletedList',
      'numberedList',
      'undo',
      'redo',
    ],
  };
  get controls() {
    return this.form.controls;
  }

  constructor(private fb: FormBuilder, public ss: StoriesService) {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.form = this.fb.group({
      summary: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      complexity: ['', Validators.required],
      estimatedHrs: ['', Validators.required],
      cost: ['', Validators.required],
    });
  }

  submit() {
    let form = this.form.value;
    // const data = {
    //   ...form,
    //   published: false,
    //   createdAt: moment().format("d/MM/YYYY, h:mm:ss a"),
    //   modified: moment().format("d/MM/YYYY, h:mm:ss a"),
    // };
    // this.ls.addBook(data);
  }
}
