import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtworkComponent } from './artwork.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ArtworkRoutingModule } from './artwork-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { ArtworkService } from './service/artwork.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';


describe('ArtworkComponent', () => {
  let component: ArtworkComponent;
  let fixture: ComponentFixture<ArtworkComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtworkComponent ],
      imports: [
        CommonModule,
        ArtworkRoutingModule,
        MaterialModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        ArtworkService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtworkComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Redirection sur le jeu"), () => {
    component.redirectGame("test")
    const navspy = spyOn(router, 'navigate');
    expect(navspy).toHaveBeenCalledWith(["/jeu/test"]);
  }
});
