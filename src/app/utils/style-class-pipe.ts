import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'StyleClass',
})
export class StyleClassPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(html: any, style: string): SafeHtml {
    const elementStyle = ` style = "${style};"`;
    const indexPosition = html.indexOf('>');
    const newHtml = [
      html.slice(0, indexPosition),
      elementStyle,
      html.slice(indexPosition),
    ].join('');
    return this.sanitizer.bypassSecurityTrustHtml(newHtml);
  }
}
