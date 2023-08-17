import { Pipe, PipeTransform, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'translate',
  standalone: true
})
export class TranslatePipe implements PipeTransform {
  private apiKey: string = environment.TRANSLATE_API_KEY;
  private apiUrl: string = 'https://api.cognitive.microsofttranslator.com/translate';

  private http = inject(HttpClient)

  transform(text: string, targetLang: string): Observable<string> {
    if (!text) {
      return new Observable<string>((observer) => {
        observer.next('');
        observer.complete();
      });
    }

    const headers = new HttpHeaders({
      'Ocp-Apim-Subscription-Key': this.apiKey,
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Region': 'southcentralus',
      'X-ClientTraceId': this.uuidv4(),
    });

    const body = [{ text }];
    const params = `api-version=3.0&to=${targetLang}`;

    return this.http.post(`${this.apiUrl}?${params}`, body, { headers }).pipe(
      map((response: any) => {
        if (response && response[0] && response[0].translations) {
          return response[0].translations[0].text;
        } else {
          return 'Error en la traducción';
        }
      })
    );
  }
  private uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
