(function($) {
  'use strict';

  var Popover = function(element, options, trigger) {
    if (!trigger) {
      throw new Error('Related target required to position popover.');
    }
    this.$popover = $(element);
    this.$trigger = $(trigger);
    this.options = options || {};
    this.visible = false;
  };

  Popover.prototype.toggle = function(relatedTarget) {
    if (!this.visible) {
      this.show(relatedTarget);
    } else {
      this.hide();

      if (this.$trigger[0] !== relatedTarget) {
        this.show(relatedTarget);
      }
    }
  };

  Popover.prototype.show = function(relatedTarget) {
    if (this.visible) { return; }
    if (relatedTarget) {
      this.$trigger = $(relatedTarget);
    }

    // Show event
    var showEvent = $.Event('show.lt.popover', {
      relatedTarget: relatedTarget
    });
    this.$popover.trigger(showEvent);

    // Allow event to be prevented
    if (showEvent.isDefaultPrevented()) { return; }

    // Open Popover
    this.visible = true;
    $(document.body).addClass('popover-open');
    this.$popover
      .addClass('open')
      .addClass('popover-' + this.options.placement)
      .attr('aria-hidden', 'false')
      .offset(this.getOffset());

    // Register close buttons
    this.$popover.on('click.close.lt.popover', '[data-toggle="popover-close"]', $.proxy(this.hide, this));

    // Register escape key
    this.optionsEscape();

    // Focus popover
    this.popoverFocus();

    // Callback
    this.options.onShow.call(this, this.$popover, this.$trigger);

    // Shown event
    var shownEvent = $.Event('shown.lt.popover', {
      relatedTarget: relatedTarget
    });
    this.$popover.trigger(shownEvent);
  };

  Popover.prototype.hide = function(relatedTarget) {
    if (!this.visible) { return; }

    // Hide event
    var hideEvent = $.Event('hide.lt.popover', {
      relatedTarget: (this.$trigger && this.$trigger[0]) ? this.$trigger[0] : relatedTarget
    });
    this.$popover.trigger(hideEvent);

    // Allow event to be prevented
    if (hideEvent.isDefaultPrevented()) { return; }

    // Hide popover
    this.visible = false;
    $(document.body).removeClass('popover-open');
    this.$popover
      .removeClass('open')
      .removeClass('popover-top popover-right popover-bottom popover-left')
      .attr('aria-hidden', 'true');

    // Unregister close button listeners
    this.$popover.off('click.close.lt.popover');

    // Unregister escape key
    this.optionsEscape();

    // Restore focus
    this.restoreFocus();

    // Callback
    this.options.onHide.call(this, this.$popover, this.$trigger);

    // Hidden event
    var hiddenEvent = $.Event('hidden.lt.popover', {
      relatedTarget: (this.$trigger && this.$trigger[0]) ? this.$trigger[0] : relatedTarget
    });
    this.$popover.trigger(hiddenEvent);
  };

  Popover.prototype.getOffset = function() {
    var coords = this.$trigger.offset();
    var position = this.options.placement;

    var top = coords.top;
    var left = coords.left;

    var height = this.$trigger.outerHeight();
    var width = this.$trigger.outerWidth();

    var popoverHeight = this.$popover.outerHeight();
    var popoverWidth = this.$popover.outerWidth();

    var result = {
      top: top,
      left: left
    };

    if (position === 'top' || position === 'bottom') {
      result.left = left + Math.floor(width / 2) - Math.floor(popoverWidth / 2);
    }

    if (position === 'right' || position === 'left') {
      result.top = top + Math.floor(height / 2) - Math.floor(popoverHeight / 2);
    }

    if (position === 'top') {
      result.top = top - popoverHeight;
    }
    else if (position === 'right') {
      result.left = left + width;
    }
    else if (position === 'bottom') {
      result.top = top + height;
    }
    else if (position === 'left') {
      result.left = left - popoverWidth;
    }

    return result;
  };

  Popover.prototype.optionsEscape = function() {
    if (this.visible && this.options.esc) {
      this.$popover.on('keydown.close.lt.popover', $.proxy(function(e) {
        if (e.which === 27) {
          this.hide();
        }
      }, this));
    } else {
      this.$popover.off('keydown.close.lt.popover');
    }
  };

  Popover.prototype.popoverFocus = function() {
    this.$popover.focus();
  };

  Popover.prototype.restoreFocus = function() {
    if (this.$trigger) {
      this.$trigger.focus();
    }
  };

  // Define jQuery plugin
  function Plugin(method, relatedTarget) {
    return this.each(function() {
      var $popover = $(this);
      var $trigger = $(relatedTarget);
      var settings = $.extend({}, Plugin.defaults, $trigger.data(), typeof method === 'object' && method);

      var data = $popover.data('lt.popover');

      if (!data) {
        data = new Popover(this, settings, relatedTarget);
        $popover.data('lt.popover', data);
      } else {
        data.options = settings;
      }

      if (typeof method === 'string') {
        data[method](relatedTarget);
      } else if (settings.show) {
        data.toggle(relatedTarget);
      }
    });
  }

  Plugin.defaults = {
    onShow: function() {},
    onHide: function() {},
    esc: true,
    placement: 'top',
    show: true
  };

  $.fn.popover = Plugin;

  $(document).on('click.lt.popover.data-attr', '[data-toggle="popover"]', function (e) {
    var $trigger = $(this);
    var $target = $($trigger.attr('data-target')) || $($trigger.attr('href'));
    var options = $target.data('lt.popover') ? 'toggle' : $.extend($target.data(), $trigger.data());

    if ($trigger.is('a')) {
      e.preventDefault();
    }

    Plugin.call($target[0], options, $trigger[0]);
  });

})(jQuery);
