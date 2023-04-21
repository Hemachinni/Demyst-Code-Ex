import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Base } from "./base.model";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private calculatedEmiSource: any;

  constructor(private httpClient: HttpClient) {}

  fetchBalanceSheet() {
    return this.httpClient.get("http://localhost:80/api/fetchBalanceSheet");
  }

  submitBusinessDetails(baseRequest: Base) {
    return this.httpClient.post<Base>(
      "http://localhost:80/api/submitBusinessDetails",
      baseRequest
    );
  }
}
