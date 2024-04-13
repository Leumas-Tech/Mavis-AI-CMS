module.exports = ({env}) => ({

    // SEO
    seo: {
        enabled: true,
      },


    //   REST CACHE
    "rest-cache": {
      config: {
        provider: {
          name: "memory",
          options: {
            max: 32767,
            maxAge: 3600,
          },
        },
        strategy: {
          contentTypes: [
            // list of Content-Types UID to cache
         
          ],
        },
      },
    },




// QRCODE

    'qrcode-generator': {
        enabled: true,
        config: {
          contentTypes: [
            {
              uid: 'api::cartel.cartel',
              targetField: 'slug',
              frontend: {
                basePath: '/cartels',
              },
            },
          ],
        },
      },



      // Encryptable fields
// https://market.strapi.io/plugins/strapi-plugin-encryptable-field
      'encryptable-field': {
        enabled: true,
    },



// Cloudinary
// https://market.strapi.io/providers/@strapi-provider-upload-cloudinary
    upload: {
        config: {
          provider: 'cloudinary',
          providerOptions: {
            cloud_name: env('CLOUDINARY_NAME'),
            api_key: env('CLOUDINARY_KEY'),
            api_secret: env('CLOUDINARY_SECRET'),
          },
          actionOptions: {
            upload: {},
            uploadStream: {},
            delete: {},
          },
        },
      },



      // Image Generator Plugin
      // https://market.strapi.io/plugins/strapi-ai-image-plugin
    //   'strapi-ai-image-plugin': {
    //     enabled: true
    //   },



// Website Builder
// https://strapi-plugin-website-builder.netlify.app/quick-start.html
// npm i strapi-plugin-website-builder

    'website-builder': {
		enabled: true,
		config: {
			builds: [
				{
					name: 'manual-build',
					url: 'https://link-to-hit-on-trigger.com',
					trigger: {
						type: 'manual',
					},
				},
			],
		},
	},

    upload: {
        config: {
          provider: "strapi4-ftp-provider",
          providerOptions: {
            host: env("FTP_HOST"),
            port: env("FTP_PORT"),
            user: env("FTP_USER"),
            password: env("FTP_PASSWORD"),
            secure: env.bool("FTP_SECURE", false),
            path: env("FTP_BASE_PATH"),
            baseUrl: env("FTP_BASE_URL"),
          },
        },
      },







// NodeMailer
// https://market.strapi.io/providers/@strapi-provider-email-nodemailer
// npm install @strapi/provider-email-nodemailer --save
      email: {
        config: {
          provider: 'nodemailer',
          providerOptions: {
            host: env('SMTP_HOST', 'smtp.example.com'),
            port: env('SMTP_PORT', 587),
            auth: {
              user: env('SMTP_USERNAME'),
              pass: env('SMTP_PASSWORD'),
            },
            // ... any custom nodemailer options
          },
          settings: {
            defaultFrom: 'hello@example.com',
            defaultReplyTo: 'hello@example.com',
          },
        },
      },
    
// File System Setup
// https://market.strapi.io/plugins/strapi-plugin-file-system
// yarn add strapi-plugin-file-system


      'file-system': {
        enabled: true,
      },

      chartbrew: true,
      
  });
  