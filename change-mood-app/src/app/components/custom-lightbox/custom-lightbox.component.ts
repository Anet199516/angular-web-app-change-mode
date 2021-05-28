import {Component, Input, OnInit} from '@angular/core';
import {Lightbox} from 'ngx-lightbox';
import {IAlbum} from 'ngx-lightbox';

@Component({
  selector: 'app-custom-lightbox',
  templateUrl: './custom-lightbox.component.html',
  styleUrls: ['./custom-lightbox.component.css']
})
export class CustomLightboxComponent implements OnInit {
  @Input() imagesData: [{device: string, thumb: string}];
  albums: IAlbum[];

  constructor(private lightbox: Lightbox) {
  }

  ngOnInit(): void {
    this.albums = this.imagesData.map(({device, thumb}) => {
      return {
        src: thumb,
        caption: device,
        thumb
      };
    });
  }

  open(event: any, index: number): void {
    event.stopPropagation();
    this.lightbox.open(this.albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this.lightbox.close();
  }

}
