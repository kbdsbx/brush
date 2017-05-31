"use strict"

+( function( $ ) {
    var _resize = function() {
        $( '.main-section' )
            .width( $( window ).width() )
            .height( $( window ).height() );
            ;
        $( '.main' )
            .width( $( window ).width() )
            .css( 'min-height', $( window ).height() );
    }

    $( window ).on( 'resize', _resize );
    $( window ).on( 'load', _resize );

    if ( window.location.hash ) {
        var _hash = window.location.hash.substr( 1 );
        setTimeout( function() {
            $( '.main-section' ).addClass( 'hide' );
            $( window.location.hash ).addClass( 'show' );
            $( '.main-section .next-box' ).removeClass( 'show' ).addClass( 'never' );
            $( '.nav' ).addClass( 'show' );
            $( '.nav li a[href="' + window.location.hash + '"]').parent().addClass( 'active' );
            $( '.nav' ).addClass( _hash + '-bg' );
        }, 400 );
    }

    $( document ).ready( function() {
        setTimeout( function() {
            if ( $( '.main-section .next-box' ).is( ':not(.never)' ) ) {
                $( '.main-section .next-box' ).addClass( 'show' );
            }
        }, 2000 );
    } );

    $( window ).on( 'mousewheel', function() {
        $( '.main-section .next-box' ).removeClass( 'show' ).addClass( 'never' );

        if ( $( '.nav' ).is( ':not(.show)' ) ) {
            $( '.nav' ).addClass( 'show' );
        }
    } );

    $( window ).on( 'scroll', function() {
    } );

    $( '.nav a' ).on( 'click', function( e ) {
        var _old = $( '.nav li.active a' ).attr( 'href' );
        $( '.nav li' ).removeClass( 'active' );
        $( this ).parent( 'li' ).addClass( 'active' );
        var _new = $( '.nav li.active a' ).attr( 'href' );
        var _hash = _new.substr( 1 );
        $( '.nav' ).removeClass( 'product-bg, project-bg' ).addClass( _hash + '-bg' );

        if ( !_old ) {
            $( '.main-section' ).addClass( 'hide' );
        }

        $( _old ).removeClass( 'show' ).addClass( 'hide' );
        $( _new ).removeClass( 'hide' ).addClass( 'show' );
        return false;
    } );
} )( jQuery );
