import {
  Component,
  input,
  output,
  model,
  HostListener,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-custom-select',
  standalone: true,
  template: `
    <div class="custom-select" [class.open]="isOpen()">
      <button
        type="button"
        class="custom-select-trigger"
        (click)="isOpen.set(!isOpen())"
        [attr.aria-expanded]="isOpen()"
        [attr.aria-haspopup]="'listbox'"
      >
        <span class="custom-select-value">
          {{ selectedLabel() || placeholder }}
        </span>
        <span class="custom-select-arrow">▼</span>
      </button>
      @if (isOpen()) {
        <ul
          class="custom-select-options"
          role="listbox"
          (click)="$event.stopPropagation()"
        >
          @for (opt of options(); track getOptionValue(opt)) {
            <li
              role="option"
              [attr.aria-selected]="model() === getOptionValue(opt)"
              class="custom-select-option"
              [class.selected]="model() === getOptionValue(opt)"
              (click)="select(opt)"
            >
              {{ getOptionLabel(opt) }}
            </li>
          }
        </ul>
      }
    </div>
  `,
  styleUrl: './custom-select.component.scss',
})
export class CustomSelectComponent<T> {
  readonly options = input.required<T[]>();
  readonly valueKey = input<string | ((item: T) => string)>('value');
  readonly labelKey = input<string | ((item: T) => string)>('label');
  readonly placeholder = input<string>('');
  readonly model = model<string>('');
  readonly modelChange = output<string>();

  readonly isOpen = signal(false);

  selectedLabel(): string {
    const val = this.model();
    const opts = this.options();
    const found = opts.find((o) => this.getOptionValue(o) === val);
    return found ? this.getOptionLabel(found) : '';
  }

  getOptionValue(opt: T): string {
    const key = this.valueKey();
    return typeof key === 'function' ? key(opt) : (opt as Record<string, unknown>)[key] as string;
  }

  getOptionLabel(opt: T): string {
    const key = this.labelKey();
    return typeof key === 'function' ? key(opt) : (opt as Record<string, unknown>)[key] as string;
  }

  select(opt: T): void {
    this.model.set(this.getOptionValue(opt));
    this.modelChange.emit(this.getOptionValue(opt));
    this.isOpen.set(false);
  }

  @HostListener('document:click')
  onDocumentClick(): void {
    this.isOpen.set(false);
  }
}
