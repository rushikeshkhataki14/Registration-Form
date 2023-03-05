import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:ApiService) { }

  get(url:string): any{
    return this.http.get(url);
  }

  post(url:string, data:any): any{
    return this.http.post(url, data);
  }

  put(url:string, data:any): any{
    return this.http.put(url, data);
  }

  delete(url:string): any{
    return this.http.delete(url);
  }
}
