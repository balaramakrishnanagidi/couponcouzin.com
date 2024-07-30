import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor( private meta: Meta, private titleService: Title) { }

    updateTitle(title: string){
      this.titleService.setTitle(title);
    }

    updateMetaTags(metaTags: {name: string, content: string} []){
      metaTags.forEach(tag => this.meta.updateTag(tag));
    }

    setCanonicalURL(url?: string){
      let link: HTMLLinkElement = document.querySelector('link[rel="canonical"]') || document.createElement('link');
      if (!link.parentElement) {
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', url || window.location.href);
    }
}
