"""Put the address of your running MarsFlex app into the Firebase landing page.

Usage:  python deploy/firebase/set_space_url.py https://YOUR-NAME-marsflex.hf.space
"""
import re
import sys
from pathlib import Path

page = Path(__file__).resolve().parent / 'public' / 'index.html'


def main():
    if len(sys.argv) != 2 or not re.fullmatch(r'https://[A-Za-z0-9.-]+\.hf\.space/?', sys.argv[1]):
        sys.exit('Give the Space address, for example: https://yourname-marsflex.hf.space')
    url = sys.argv[1].rstrip('/')
    text = page.read_text(encoding='utf-8')
    if '__SPACE_URL__' in text:
        text = text.replace('__SPACE_URL__', url)
    else:
        text = re.sub(r'https://[A-Za-z0-9.-]+\.hf\.space', url, text)
    page.write_text(text, encoding='utf-8', newline='\n')
    print('Landing page now points to', url)


if __name__ == '__main__':
    main()
