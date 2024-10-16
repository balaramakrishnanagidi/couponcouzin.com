import { Component, Input, OnInit } from '@angular/core';
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
  isCouponCode = true;

  constructor(public activeModal: NgbActiveModal,
    private clipboardService: ClipboardService,
    public toastr: ToastrService) { }

    loading: boolean | undefined;

  ngOnInit(): void { 
    const code = (this.data[3]).toUpperCase();

    if(code.includes('NO CODE') || code.includes('NOT REQUIRED') || code.includes('--') || code.includes('$$') || code.includes('**')){
      this.isCouponCode = false;
    }
   
    this.loading = true;

    setTimeout( () => {
      this.loading = false;
    },3000);

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
    event.target.src = '/assets/no-image.jpg';
  }
}
