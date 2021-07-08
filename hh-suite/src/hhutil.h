/*
 * hhutil.h
 *
 *  Created on: Mar 28, 2014
 *      Author: meiermark
 */

#ifndef HHUTIL_H_
#define HHUTIL_H_

#include <errno.h>

#include "hhdecl.h"
#include "hhutil-inl.h"

int FormatError(const char infile[], const char* file, const int line, const char* func, const char details[]="");

int OpenFileError(const char outfile[], const char* file, const int line, const char* func);

int MemoryError(const char arrayname[], const char* file, const int line, const char* func);

int SyntaxError(const char* file, const int line, const char* func, const char details[]="");

int InternalError(const char errstr[], const char* file, const int line, const char* func);

// Count number of lines in <file>
int CountLinesInFile(const char* file);

void float_to_8_bit(float input, unsigned char& result);

void bit_8_to_float(unsigned char input, float& result);

void float_to_16_bit(float input, unsigned short int& result);

void bit_16_to_float(unsigned short int input, float& result);

void writeU16(std::ostream& file, unsigned short int val);
void writeS16(std::ostream& file, signed short int val);

#endif /* HHUTIL_H_ */
