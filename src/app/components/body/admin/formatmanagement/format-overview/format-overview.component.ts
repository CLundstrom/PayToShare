import {Component, OnInit} from '@angular/core';
import {Format} from '../../../../../models/products/format';
import {FormatService} from '../../../../../services/product/format.service';

@Component({
  selector: 'app-format-overview',
  templateUrl: './format-overview.component.html',
  styleUrls: ['./format-overview.component.scss']
})
export class FormatOverviewComponent implements OnInit {

  private formats: Format[];

  constructor(private formatService: FormatService) {
  }

  ngOnInit() {
    this.formatService.getFormats().subscribe(formats => this.formats = formats);
  }

}
