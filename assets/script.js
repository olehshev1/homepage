(function() {

    var SkillsBar = function( bars ) {
        this.bars = document.querySelectorAll( bars );
        if( this.bars.length > 0 ) {
            this.init();
        }
    };

    SkillsBar.prototype = {
        init: function() {
            var self = this;
            self.index = -1;
            self.timer = setTimeout(function() {
                self.action();
            }, 500);


        },
        select: function( n ) {
            var self = this,
                bar = self.bars[n];

            if( bar ) {
                var width = bar.parentNode.dataset.percent;

                bar.style.width = width;
                bar.parentNode.classList.add( "complete" );
            }
        },
        action: function() {
            var self = this;
            self.index++;
            if( self.index == self.bars.length ) {
                clearTimeout( self.timer );
            } else {
                self.select( self.index );
            }

            setTimeout(function() {
                self.action();
            },500);
        }
    };

    window.SkillsBar = SkillsBar;

})();

(function() {
    document.addEventListener( "DOMContentLoaded", function() {
        var skills = new SkillsBar( ".skillbar-bar" );
    });
})();

document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("myModal");
    var link = document.getElementById("openModalLink");
    var span = document.getElementsByClassName("close")[0];

    link.onclick = function(event) {
        event.preventDefault();
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
