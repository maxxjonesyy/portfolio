import { transition } from "../utils";
import { isDarkTheme } from "../utils";
import { Phone, PhoneDark, Email, EmailDark } from "../assets";

function Contact() {
  async function handleCopy(event: React.MouseEvent<HTMLButtonElement>) {
    const copyAlert = document.getElementById("copy-alert") as HTMLDivElement;
    const text = event.currentTarget.textContent as string;

    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      const copiedText = await navigator.clipboard.readText();

      if (text === copiedText) {
        copyAlert.textContent = "Copied to Clipboard.";
        copyAlert.classList.remove("hidden");

        setTimeout(() => {
          copyAlert.classList.add("hidden");
        }, 2500);
      }
    } catch {
      copyAlert.textContent = "Failed to copy.";
      copyAlert.classList.remove("hidden");

      setTimeout(() => {
        copyAlert.classList.add("hidden");
      }, 2500);
    }
  }

  return (
    <div className='container flex flex-col flex-1 items-center justify-center my-10'>
      <h1 className='text-heading'>Contact</h1>
      <p className='mt-3 text-body'>
        Some simple, click to copy details if you wish.
      </p>

      <div className='background-glass flex flex-wrap gap-5 p-5 mt-5'>
        <button
          className='text-body flex items-center gap-2 hover:opacity-60'
          aria-label='Copy my phone number to clipboard'
          onClick={handleCopy}>
          <img
            src={isDarkTheme() ? PhoneDark : Phone}
            width={18}
            height={18}
            alt='Phone Icon'
          />
          0452 494 959
        </button>

        <button
          className='text-body flex items-center gap-2 hover:opacity-60'
          aria-label='Copy my email address to clipboard'
          onClick={handleCopy}>
          <img
            src={isDarkTheme() ? EmailDark : Email}
            width={18}
            height={18}
            alt='Email Icon'
          />
          maxxjonesyy@gmail.com
        </button>
      </div>

      <div
        id='copy-alert'
        className='hidden mt-5 font-medium text-lg text-accentText'></div>
    </div>
  );
}

export default transition(Contact);
