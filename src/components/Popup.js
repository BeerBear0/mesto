export default class Popup {
    constructor (popupElement) {
        this._popupElement = popupElement;
        this._handleEscClose = this._handleEscClose.bind(this)
        this._handleOverlayClose= this._handleOverlayClose.bind(this)
        this._submitButton = this._popupElement.querySelector('.popup__submit')
    }

    openPopup() {
        this._popupElement.classList.add('popup__opened');
        document.addEventListener('keydown',this._handleEscClose);
        document.addEventListener('click', this._handleOverlayClose);
    }

    closePopup() {
        this._popupElement.classList.remove('popup__opened');
        document.removeEventListener('keydown',this._handleEscClose);
        document.removeEventListener('click',this._handleOverlayClose);

    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.closePopup()
        }
    }

    _handleOverlayClose(evt) {
        if (evt.target.classList.contains('popup')) {
            this.closePopup();
        }
    };

    setEventListeners() {
        this._popupElement.querySelector('.popup__close-btn').addEventListener('click', () => this.closePopup())

    }

    loaderHandler(textMessage) {
        if (this._submitButton) {
            this._submitButton.textContent = textMessage;
        }
    }

}