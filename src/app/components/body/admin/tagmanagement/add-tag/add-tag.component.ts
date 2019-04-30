import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TagService} from '../../../../../services/product/tag.service';
import {Tag} from '../../../../../models/products/tag';
import {firestore} from 'firebase/app';
import Timestamp = firestore.Timestamp;

@Component({
  selector: 'app-add-tag',
  templateUrl: './add-tag.component.html',
  styleUrls: ['./add-tag.component.scss']
})
export class AddTagComponent implements OnInit {

  newTagForm = new FormGroup({
    tagName: new FormControl(''),
  });

  constructor(private tagService: TagService, private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  addTag() {
    const tag: Tag = {name: this.newTagForm.controls.tagName.value, products: 0, created: Timestamp.now()};
    this.tagService.addTag(tag);
    this.modalService.dismissAll();
  }

  openCenteredDialog(addTagModal) {
    this.modalService.open(addTagModal, {centered: true});
    return false;
  }
}
