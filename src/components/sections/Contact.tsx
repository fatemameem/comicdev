import React from 'react';
import { ComicPanel } from '../ui/ComicPanel';
import { Button } from '../ui/Button';
import { Send, Mail, Linkedin, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="contact" className="py-20 px-4 md:px-8 text-comic-black dark:text-comic-dark-text bg-comic-paper dark:bg-comic-dark-bg border-t-4 border-comic-black dark:border-comic-gray">
      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="font-comic font-bold text-5xl">{t('contact.title')}</h2>
          <p className="font-body mt-2 text-xl opacity-90">{t('contact.subtitle')}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          
          {/* Form */}
          <ComicPanel className="bg-white">
            <form className="space-y-4">
              <div>
                <label className="block font-comic font-bold mb-1">{t('contact.yourName')}</label>
                <input type="text" className="w-full border-2 border-comic-black dark:border-comic-gray p-3 font-body rounded-sm bg-white dark:bg-comic-dark-bg text-comic-black dark:text-comic-dark-text focus:outline-none focus:shadow-comic-sm dark:focus:shadow-comic-dark-sm focus:bg-yellow-50 dark:focus:bg-gray-800 transition-all" placeholder={t('contact.namePlaceholder')} />
              </div>
              <div>
                <label className="block font-comic font-bold mb-1">{t('contact.email')}</label>
                <input type="email" className="w-full border-2 border-comic-black dark:border-comic-gray p-3 font-body rounded-sm bg-white dark:bg-comic-dark-bg text-comic-black dark:text-comic-dark-text focus:outline-none focus:shadow-comic-sm dark:focus:shadow-comic-dark-sm focus:bg-yellow-50 dark:focus:bg-gray-800 transition-all" placeholder={t('contact.emailPlaceholder')} />
              </div>
              <div>
                <label className="block font-comic font-bold mb-1">{t('contact.message')}</label>
                <textarea rows={4} className="w-full border-2 border-comic-black dark:border-comic-gray p-3 font-body rounded-sm bg-white dark:bg-comic-dark-bg text-comic-black dark:text-comic-dark-text focus:outline-none focus:shadow-comic-sm dark:focus:shadow-comic-dark-sm focus:bg-yellow-50 dark:focus:bg-gray-800 transition-all" placeholder={t('contact.messagePlaceholder')}></textarea>
              </div>
              <Button type="submit" fullWidth className="flex justify-center items-center gap-2">
                {t('contact.sendIt')} <Send size={18} />
              </Button>
            </form>
          </ComicPanel>
          {/* Socials & Info */}
          <div className="space-y-8">
            <div className="relative">
              <div className="bg-white dark:bg-comic-dark-paper p-6 border-2 border-comic-black dark:border-comic-gray rounded-3xl rounded-bl-none shadow-comic dark:shadow-comic-dark">
                <p className="font-comic text-xl">
                  "{t('contact.quote')}"
                </p>
              </div>
              {/* Speech bubble tail */}
              {/* <svg className="absolute -bottom-4 left-0 w-6 h-6 text-white dark:text-comic-dark-paper border-l-2 border-b-2 border-comic-black dark:border-comic-gray bg-white dark:bg-comic-dark-paper transform skew-x-12" viewBox="0 0 10 10"></svg> */}
            </div>

            <div className="flex flex-col md:flex-row justify-start items-center gap-4">
                <h3 className="font-comic font-bold text-2xl">{t('contact.findMeElsewhere')}</h3>
                <div className="flex gap-4">
                  <a href="#" className="bg-black dark:bg-gray-700 text-white p-3 rounded-full hover:bg-comic-yellow hover:text-black hover:scale-110 transition-all border-2 border-transparent hover:border-black dark:hover:border-white" title={t('contact.twitter')}>
                    {/* <Twitter size={24} /> */}
                    <Github size={24} />
                  </a>
                  <a href="#" className="bg-black dark:bg-gray-700 text-white p-3 rounded-full hover:bg-comic-yellow hover:text-black hover:scale-110 transition-all border-2 border-transparent hover:border-black dark:hover:border-white" title={t('contact.linkedin')}>
                    <Linkedin size={24} />
                  </a>
                  <a href="#" className="bg-black dark:bg-gray-700 text-white p-3 rounded-full hover:bg-comic-yellow hover:text-black hover:scale-110 transition-all border-2 border-transparent hover:border-black dark:hover:border-white" title={t('contact.mail')}>
                    <Mail size={24} />
                  </a>
                </div>
            </div>
          </div>

        </div>
        <img src="/snoopy/contact.png"  alt="Snoopy Background" className="hidden md:block absolute w-52 h-52 bottom-0 right-5 opacity-90 transform scale-x-[-1] z-0" />
      </div>
    </section>
  );
};