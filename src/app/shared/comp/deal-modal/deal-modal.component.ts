import { Component, Input, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-deal-modal',
  templateUrl: './deal-modal.component.html',
  styleUrls: ['./deal-modal.component.css']
})
export class DealModalComponent implements OnInit {
  @Input() data: any[] = [];

  profile = true;

  constructor(public activeModal: NgbActiveModal,
    private clipboardService: ClipboardService,
    public toastr: ToastrService,
    private meta: Meta) { }

  ngOnInit(): void {
    this.meta.addTag({ name: 'description', content: 'modal of couponcouzin.com' });
    this.meta.addTag({ name: "keywords", content: "couponcouzin, couponcouzin.com, loot deals, best deals, coupon codes, travel, electronics" });
    // console.log('data -- '  ,this.data); 
  }

  copyCodeToClipboard(text: string) {
    if (this.clipboardService.copyFromContent(text)) {
      // console.log('Text copied to clipboard', text);
      this.toastr.success('Code copied to clipboard', 'Success');
    }
    else {
      console.log('failed to copy to clipboard');
      this.toastr.error('Copy failed', 'Error');
    }
  }


  closeModal() {
    this.activeModal.dismiss('Close click');
  }
  onImageErrorP(event: any) {
    event.target.src = '/assets/image_not_found.png';
  }
}
