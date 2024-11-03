import { useState } from 'react'
import { UserPlus, Info } from 'lucide-react'
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { NewMembershipForm } from '@/app/shared/models/membeship.model'

export default function Component() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<NewMembershipForm>({
    firstName: '',
    lastName: '',
    email: '',
    transactionReference: '',
    transactionDate: ''
  })
  const [errors, setErrors] = useState<NewMembershipForm>({
    firstName: '',
    lastName: '',
    email: '',
    transactionReference: '',
    transactionDate: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const validateForm = () => {
    const newErrors: NewMembershipForm = {
      firstName: '',
      lastName: '',
      email: '',
      transactionReference: '',
      transactionDate: ''
    }
    let isValid = true

    if (!formData.firstName.trim()) {
      newErrors.firstName = t('firstNameValidationError')
      isValid = false
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = t('lastNameValidationError')
      isValid = false
    }
    if (!formData.email.trim()) {
      newErrors.email = t('emailValidationError')
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('emailValidationError')
      isValid = false
    }
    if (!formData.transactionReference.trim()) {
      newErrors.transactionReference = t('transactionReferenceValidationError')
      isValid = false
    }
    if (!formData.transactionDate.trim()) {
        newErrors.transactionDate = t('transactionDateValidationError')
        isValid = false
      }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      console.log('Form submitted:', formData)
      alert('Form submitted successfully!')
      // Here you would typically send the data to your backend
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 sm:p-8">
      <Card className="w-full max-w-2xl shadow-md border border-gray-200 bg-gradient-to-b from-gray-50 to-gray-100">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold text-gray-800">{t('memberRegistrationTitle')}</CardTitle>
          <CardDescription className="text-gray-600 mt-2">
            {t('memeberRegistrationSubtitle')}
          </CardDescription>
        </CardHeader>
        <form className="text-left" onSubmit={handleSubmit} noValidate>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">{t('firstName')}</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder={t('firstNameFormFiller')}
                  value={formData.firstName}
                  onChange={handleInputChange}
                  aria-invalid={!!errors.firstName}
                  aria-describedby="firstName-error"
                />
                {errors.firstName && (
                  <p id="firstName-error" className="text-sm text-red-500">{errors.firstName}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">{t('lastName')}</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder={t('lastNameFormFiller')}
                  value={formData.lastName}
                  onChange={handleInputChange}
                  aria-invalid={!!errors.lastName}
                  aria-describedby="lastName-error"
                />
                {errors.lastName && (
                  <p id="lastName-error" className="text-sm text-red-500">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t('emailTitle')}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={t('emailFormFiller')}
                value={formData.email}
                onChange={handleInputChange}
                aria-invalid={!!errors.email}
                aria-describedby="email-error"
              />
              {errors.email && (
                <p id="email-error" className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Label htmlFor="transactionReference">{t('transactionReferenceTitle')}</Label>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-5 w-5 p-0">
                      <Info className="h-4 w-4" />
                      <span className="sr-only">Transaction reference info</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{t('transactionTitle')}</DialogTitle>
                      <DialogDescription>
                        {t('transactionInfo')}
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
              <Input
                id="transactionReference"
                name="transactionReference"
                placeholder={t('transactionFormFiller')}
                value={formData.transactionReference}
                onChange={handleInputChange}
                aria-invalid={!!errors.transactionReference}
                aria-describedby="transactionReference-error"
              />
              {errors.transactionReference && (
                <p id="transactionReference-error" className="text-sm text-red-500">{errors.transactionReference}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="transactionDate">{t('transactionDateTitle')}</Label>
              <div className="relative">
                <Input
                  id="transactionDate"
                  name="transactionDate"
                  type="date"
                  value={formData.transactionDate}
                  onChange={handleInputChange}
                  aria-invalid={!!errors.transactionDate}
                  aria-describedby="transactionDate-error"
                  className="pr-10"
                />
              </div>
              {errors.transactionDate && (
                <p id="transactionDate-error" className="text-sm text-red-500">{errors.transactionDate}</p>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              <UserPlus className="w-5 h-5 mr-2" />
              {t('registrationBtn')}
            </Button>
          </CardFooter>
        </form>
      </Card>
      <p className="mt-8 text-gray-500 text-center text-sm">
        © {t('copyRight')}
      </p>
    </div>
  )
}