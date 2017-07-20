import {Directive, HostBinding, Renderer, Renderer2, ElementRef, Input} from '@angular/core';
import { Router } from '@angular/router'

import { AclService } from '../../service/acl.service';

@Directive({selector: '[acl]'})
export class AclDirective {
    private nativeElement : Node;

    @HostBinding('hidden')
    hideRouterLink: boolean;

    @Input('routerLink')
    routeParams: string;    

    constructor(
        private el: ElementRef,
        private renderer: Renderer,
        private renderer2: Renderer2,
        private aclService: AclService,
        private router: Router,
    ) {        
        this.nativeElement = this.el.nativeElement;
    }

    ngOnInit() {        
        let uri = this.routeParams[0];               
        this.hideRouterLink = !this.aclService.isAllowed(uri);        
    }
}
