import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { Offer } from "../model/Offer";

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})



export class MainpageComponent implements OnInit {
  // to get category and posted date from options
  @ViewChild("category") category: ElementRef = new ElementRef("");
  @ViewChild("postedDate") postedDate: ElementRef = new ElementRef("");
  
  //to view errors
  pageError: string = ""
  showError:boolean = false

  //jwt token
  token: string | null = ""
  loggedname:string | null=""
  constructor(private configService: ConfigService) { }
  
  //offers variable to save the offers retreived from the api
  offers: Offer[] = []

  ngOnInit(): void {
    //get the token
    this.token = localStorage.getItem('token');
    this.loggedname=localStorage.getItem('uname');
    
    //retrive the offers (default category electronics)
    if (this.token != null) {
      this.configService.getOffers(this.token, "Electronics").subscribe((data: Offer[]) => {
        console.log(data);
        this.offers = data;
      },
        error => {
         if(this.offers.length==0){
          this.pageError = "No offer available !! try posting some offer"
          this.showError = true
          setTimeout(function() {
            $('#errordiv').fadeOut('fast');
        }, 1000);
        $("#errordiv").show();
         }else{
          console.log(error);
          this.pageError = "We encountered some error please try again later"
          this.showError = true
          setTimeout(function() {
            $('.errordiv').fadeOut('fast');
        }, 1000);
        $("#errordiv").show();
         }
        });
    }

    
  }

  //on changing category trigger function
  onCategoryChange() {
    let category = this.category.nativeElement.value

    //get the offers filtered by category
    if (this.token != null)
      this.configService.getOffers(this.token, category).subscribe((data: Offer[]) => {
        console.log(data);
        this.offers = data;
      },
        error => {
          if(error.status == 404)
           { this.pageError = "no offers found try a different category"
           setTimeout(function() {
            $('#errordiv').fadeOut('slow');
        }, 1000);
        $("#errordiv").show();
          }
          else
            this.pageError = "We encountered some error please try again later"
          this.showError =true
          console.log(error);
        });
  }

  //retrieve top 3 liked offers
  filterByTopLikes() {
    if (this.token != null)
      this.configService.getOffersByTopLikes(this.token).subscribe((data: Offer[]) => {
        console.log(data);
        this.offers = data;
      },
        error => {
          this.pageError = "We encountered some error please try again later"
          this.showError = true
          console.log(error);
        });
  }

  //filter the posts by the posted date
  filterByPostedDate() {
    let postedDate = this.postedDate.nativeElement.value
    if (this.token != null)
      this.configService.getOffersByPostedDate(this.token, postedDate).subscribe((data: Offer[]) => {
        console.log(data);
        this.offers = data;
      },
        error => {
          console.log(error)
          if (error.status == 400)
            this.pageError = "please enter a valid date"

          else if (error.status == 404)
            this.pageError = "no offers found"
          else
            this.pageError = "Please Enter a valid date"
          this.showError = true
          console.log(error);
          
          setTimeout(function() {
            $('#errordiv').fadeOut('slow');
        }, 1000);
        $("#errordiv").show();
        });
  }

  //show recently liked posts by the user
  showRecentlyLiked() {
    if (this.token != null)
      this.configService.getRecentlyLiked(this.token).subscribe((data: Offer[]) => {
        this.offers = data
      }, error => {
        console.log(error)
        this.pageError = "We encountered some error please try again later"
        this.showError = true;
        setTimeout(function() {
          $('#errordiv').fadeOut('slow');
      }, 1000);
      $("#errordiv").show();
      })
  }

  closebar(){
    this.showError=false
  }
}
