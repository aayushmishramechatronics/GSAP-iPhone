import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More Ways to Shop: {' '}
            <span className="underline text-blue">
            Find an Apple Store {' '}
            </span>
            or {' '}
            <span className="underline text-blue">
            Other Retailer
            </span>{' '}
            near you.
          </p>
          <p className="font-semibold text-gray text-xs">
            Or Call 91-84249-66294
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">Copright @ 2025 Design & Build by Aayush Mishra. All Rights Reserved.</p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
